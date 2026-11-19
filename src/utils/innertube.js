/**
 * @param {string} id
 * @param {string} url
 */
export async function getVideoBasicInfo(id, url) {
  /** @type {VideoBasicInfo} */
  const info = await fetch(url, {
    body: JSON.stringify({ id }),
    method: "POST",
  }).then((res) => res.json());
  return info;
}
