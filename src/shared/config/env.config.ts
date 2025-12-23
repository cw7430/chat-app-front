const envConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'
}

export default envConfig;