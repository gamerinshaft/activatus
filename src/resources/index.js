export function configure(aurelia) {
    aurelia.globalResources('dropdown.html');    // ViewModel 省略したなら .html をつけよう
    aurelia.globalResources('nav-bar.html');    // ViewModel 省略したなら .html をつけよう
    // 部品が増えたら同じようにここに追加していく
}