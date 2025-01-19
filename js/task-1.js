const categories = document.querySelectorAll(".category");
function countCategories() {
    return `Number of categories: ${ categories.length}`;
}

const allCategories = document.querySelectorAll(".item");
function getCategoryInfo() {
    const categoryInfo = [];
    allCategories.forEach(category => {
        const categoryName = category.querySelector(".category-name").textContent;
        const items = category.querySelectorAll(".category li").length;
        categoryInfo.push(`Category: ${categoryName}\nElements: ${items}\n`);
    });
     return categoryInfo.join("");
}


console.log(countCategories());
console.log(getCategoryInfo());