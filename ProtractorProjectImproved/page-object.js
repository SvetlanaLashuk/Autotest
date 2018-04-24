function Page() {
    this.featuresLink = $('[href="features"]');
    this.resourcesLink = $('[href="resources"]');
    this.resourcesName = $('[title="Resources"]');
    this.searchField = $('[type="search"]');
    this.searchResTitle = $('aio-search-results');
    this.homeLink = $('.nav-link.home');
    this.navigationBar = $('ul [role="navigation"]');
    this.searchReasults = $('.search-area');
    this.docsMenuItem = $('[title="Docs"]');
    this.resourcesMenuItem = $('.marketing-banner');
    this.buttonVertMenu = $('.hamburger.mat-button');
    this.sideNav = $('.sidenav.mat-drawer');
    this.verticalMenuItem = $('.vertical-menu-item.heading.ng-star-inserted');
    this.submenuElement = $('.vertical-menu-item.level-2');
}
module.exports=new Page();