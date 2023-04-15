import { copy } from "fs-extra"

copy("apps/web/dist", "dist/web")

copy("apps/docs/dist", "dist/docs")
