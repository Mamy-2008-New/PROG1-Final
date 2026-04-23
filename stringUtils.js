export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
        .replace(/[^\w\s-]/g, '') 
        .replace(/[\s_-]+/g, '-'); 
}

export function truncate(str, limit) {
    if (str.length <= limit) return str;
    const subString = str.slice(0, limit);

    return subString.slice(0, subString.lastIndexOf(" ")) + "...";
}

export function countWords(str) {

    const words = str.trim().match(/\S+/g);
    return words ? words.length : 0;
}

export function escapeHTML(str) {
    const charMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return str.replace(/[&<>"']/g, match => charMap[match]);
}