import type { DefaultTheme } from 'vitepress'
import sidebarAuto from '../sidebarAuto.js'
import path from 'node:path';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "/workflow/": sidebarAuto(
    path.resolve(__dirname, "../../workflow/css"),

  ).concat(sidebarAuto(
    path.resolve(__dirname, "../../workflow/git"),

  )),
  "/analysis/": sidebarAuto(
    path.resolve(__dirname,"../../analysis/utils"),"分析"
  )

}

