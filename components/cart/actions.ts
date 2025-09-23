'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { DEFAULT_CURRENCY_CODE, TAGS } from 'lib/constants';
import {
  createEmptyCart,
  findProductByVariantId,
  loadCart,
  saveCart
} from 'lib/data';
import type { Cart, CartItem } from 'lib/types';

function formatAmount(amount: number) {
  return amount.toFixed(2);
}

function persistCart(cart: Cart, lines: CartItem[]) {
  const updatedCart = saveCart({ ...cart, lines });
  revalidateTag(TAGS.cart);
  return updatedCart;
}

export async function addItem(
  _prevState: unknown,
  selectedVariantId: string | undefined
) {
  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    const productData = findProductByVariantId(selectedVariantId);

    if (!productData) {
      return 'Product not found';
    }

    const cart = loadCart();
    const { product, variant } = productData;
    const currencyCode = variant.price.currencyCode ?? DEFAULT_CURRENCY_CODE;
    const existingLine = cart.lines.find(
      (line) => line.merchandise.id === variant.id
    );

    let updatedLines: CartItem[];

    if (existingLine) {
      const newQuantity = existingLine.quantity + 1;
      const unitPrice =
        existingLine.quantity > 0
          ? Number(existingLine.cost.totalAmount.amount) / existingLine.quantity
          : Number(existingLine.cost.totalAmount.amount);
      const lineTotal = formatAmount(unitPrice * newQuantity);

      updatedLines = cart.lines.map((line) =>
        line.merchandise.id === variant.id
          ? {
              ...line,
              quantity: newQuantity,
              cost: {
                totalAmount: {
                  amount: lineTotal,
                  currencyCode
                }
              }
            }
          : line
      );
    } else {
      const newLine: CartItem = {
        id: `line-${variant.id}`,
        quantity: 1,
        cost: {
          totalAmount: {
            amount: formatAmount(Number(variant.price.amount)),
            currencyCode
          }
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product
        }
      };

      updatedLines = [...cart.lines, newLine];
    }

    persistCart(cart, updatedLines);

    return 'Item added to cart';
  } catch (error) {
    console.error('Failed to add item to cart', error);
    return 'Error adding item to cart';
  }
}

export async function removeItem(_prevState: unknown, merchandiseId: string) {
  if (!merchandiseId) {
    return 'Missing product variant ID';
  }

  try {
    const cart = loadCart();
    const updatedLines = cart.lines.filter(
      (line) => line.merchandise.id !== merchandiseId
    );

    persistCart(cart, updatedLines);
    return 'Item removed from cart';
  } catch (error) {
    console.error('Failed to remove item from cart', error);
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  _prevState: unknown,
  formData: FormData
) {
  try {
    const merchandiseId = formData.get('merchandiseId') as string;
    const quantityValue = Number(formData.get('quantity'));

    if (!merchandiseId || Number.isNaN(quantityValue)) {
      return 'Invalid quantity';
    }

    const nextQuantity = Math.max(1, Math.floor(quantityValue));
    const cart = loadCart();
    const existingLine = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (!existingLine) {
      return 'Item not found in cart';
    }

    const unitPrice =
      existingLine.quantity > 0
        ? Number(existingLine.cost.totalAmount.amount) / existingLine.quantity
        : Number(existingLine.cost.totalAmount.amount);
    const lineTotal = formatAmount(unitPrice * nextQuantity);
    const currencyCode =
      existingLine.cost.totalAmount.currencyCode ?? DEFAULT_CURRENCY_CODE;

    const updatedLines = cart.lines.map((line) =>
      line.merchandise.id === merchandiseId
        ? {
            ...line,
            quantity: nextQuantity,
            cost: {
              totalAmount: {
                amount: lineTotal,
                currencyCode
              }
            }
          }
        : line
    );

    persistCart(cart, updatedLines);
    return 'Cart updated';
  } catch (error) {
    console.error('Failed to update cart quantity', error);
    return 'Error updating cart';
  }
}

export async function createCart() {
  try {
    const cart = saveCart(createEmptyCart());
    revalidateTag(TAGS.cart);
    return cart;
  } catch (error) {
    console.error('Failed to create cart', error);
    return createEmptyCart();
  }
}

export async function createCartAndSetCookie() {
  try {
    const cart = loadCart();
    saveCart(cart);
    revalidateTag(TAGS.cart);
    return 'Cart ready';
  } catch (error) {
    console.error('Failed to initialize cart', error);
    saveCart(createEmptyCart());
    revalidateTag(TAGS.cart);
    return 'Cart ready';
  }
}

export async function redirectToCheckout() {
  const cart = loadCart();
  redirect(cart.checkoutUrl || '/contact');
}
