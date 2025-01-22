const categories = document.querySelectorAll(".item");
function countCategories() {
    return `Number of categories: ${ categories.length}`;
}

function getCategoryInfo() {
    const categoryInfo = [];
    categories.forEach(category => {
        const categoryName = category.querySelector("h2").textContent;
        const items = category.querySelectorAll("ul > li").length;
        categoryInfo.push(`Category: ${categoryName}\nElements: ${items}\n`);
    });
     return categoryInfo.join("");
}


console.log(countCategories());
console.log(getCategoryInfo());