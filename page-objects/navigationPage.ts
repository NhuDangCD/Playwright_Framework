import { Locator, Page } from "@playwright/test";
export class NavigationPage {
    private readonly page: Page;
    readonly fromLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuIteam: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) {
        this.page = page;

    }
    async formLayoutsPage(page: Page) {
        await this.selectgroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }
    async datepickerPage() {
        await this.selectgroupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }
    async smartTablePage() {

        await this.selectgroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }
    async toasttrPage() {
        await this.selectgroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()

    }
    async tooltipPage() {
        await this.selectgroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()

    }
    async selectgroupMenuItem(groupItemTitle: string) {
        const menuItem = this.page.locator(`a[title="${groupItemTitle}"]`);
        const expandedState = await menuItem.getAttribute('aria-expanded');
        if (expandedState === "false") {
            await menuItem.click();
        }
    }
}

