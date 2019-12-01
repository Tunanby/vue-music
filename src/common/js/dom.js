/**
 * @param { 指定元素 } el 
 * @param { dataset 里的值 } nane 
 */

export function getIndex(el, n, value) {
    const prefix = "data-"
    name = prefix + n
    if (value) {
        return el.setAttribute(name, value)
    } else {
        return el.getAttribute(name)
    }
}