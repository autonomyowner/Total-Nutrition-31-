import { NextRequest, NextResponse } from 'next/server';

export const revalidate = false;

// Simple revalidation for local data
export async function POST(req: NextRequest): Promise<NextResponse> {
  // For now, just return success since we're using local data
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
