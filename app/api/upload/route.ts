import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  // ⚠️ The below code is for App Router Route Handlers only
  if(filename){
    //const blob = await put(filename, request.body, {
    //  access: 'public',
    //});
    // Here's the code for Pages API Routes:
    const blob = await put(filename, request, {
      access: 'public',
    });

    return NextResponse.json(blob);
  }
  else{
    const message = "The filename must not be empty.";
    const response = new NextResponse(message, { status: 400 });
    return response.send(response);
  }
}

// The next lines are required for Pages API Routes only
export const bodyParser = false;
