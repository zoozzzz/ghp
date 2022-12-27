/*
 * Description: 
 * Created: 2022-11-02 17:41:43
 * Author : Wing
 * Email : cairz@mogulinker.com
 * -----
 * Last Modified: 2022-11-02 17:41:43
 * Modified By: Wing
 * -----
 * Copyright (c) 2022 www.mogulinker.com
 */

declare module '*.md';
declare module '*.ts';
declare module '*.css';
declare module '*.less';
declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}