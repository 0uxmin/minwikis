import type { DefaultTheme } from 'vitepress'
import sidebarAuto from '../sidebarAuto.js'
import path from 'node:path';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "weekly": sidebarAuto(
    path.resolve(__dirname,"../../weekly/2023"),"2023年周报"
  ),

  "/workflow/": sidebarAuto(
    path.resolve(__dirname, "../../workflow/css"),

  ).concat(sidebarAuto(
    path.resolve(__dirname, "../../workflow/git"),

  )),
  "/analysis/": sidebarAuto(
    path.resolve(__dirname,"../../analysis/utils"),"分析"
  )

}

