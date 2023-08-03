/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import CMS from "netlify-cms-app";

// 导入你的配置文件
import config from "./cms/config.yml";

// 注册CMS配置
CMS.init({ config });
