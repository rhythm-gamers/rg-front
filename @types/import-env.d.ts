declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_AWS_CLOUDFRONT_URL: string;
    NEXT_PUBLIC_AWS_CLOUDFRONT_HOSTNAME: string;
    STORYBOOK_AWS_CLOUDFRONT_HOSTNAME: string;
    STORYBOOK_AWS_CLOUDFRONT_URL: string;
  }
}
