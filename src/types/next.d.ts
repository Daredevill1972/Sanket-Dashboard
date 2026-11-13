// Type declarations for Next.js App Router server module and fetch augmentation

declare module 'next/server' {
  export class NextResponse<Body = unknown> extends Response {
    static json<T = unknown>(body: T, init?: ResponseInit): NextResponse<T>;
    static redirect(url: string | URL, status?: number): NextResponse;
    static rewrite(destination: string | URL): NextResponse;
    static next(): NextResponse;
  }
}

interface RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}
