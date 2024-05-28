export const Abbr = (text) => {
    return Number(text.length) >= 20 ? `${text.substring(0,20)}...`:text
}