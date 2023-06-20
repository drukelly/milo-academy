import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const { createTag } = await import(`${getLibs()}/utils/utils.js`);
  console.log(el);
}
