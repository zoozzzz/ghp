/*
 * Description: 
 * Created: 2022-11-02 10:27:00
 * Author : Wing
 * Email : cairz@mogulinker.com
 * -----
 * Last Modified: 2022-11-02 10:27:00
 * Modified By: Wing
 * -----
 * Copyright (c) 2022 www.mogulinker.com
 */

const getMdData = async (url: string) => {
  const res = await fetch(url);
  return res.text();
}

export default getMdData;