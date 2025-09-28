interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string
}

namespace NodeJS {
  type ProcessEnv = ImportMetaEnv
}
