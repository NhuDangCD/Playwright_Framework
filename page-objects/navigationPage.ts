import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {
    readonly page: Page;

    // Define locators
    readonly fromLayoutsMenuItem: Locator;
    readonly datePickerMenuItem: Locator;
    readonly smartTableMenuItem: Locator;
    readonly toastrMenuItem: Locator;
    readonly tooltipMenuItem: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        // Initialize locators here
        this.fromLayoutsMenuItem = page.getByText("Form Layouts");
        this.datePickerMenuItem = page.getByText("Datepicker");
        this.smartTableMenuItem = page.getByText("Smart Table");
        this.toastrMenuItem = page.getByText("Toastr");
        this.tooltipMenuItem = page.getByText("Tooltip");
    }

    async formLayoutsPage() {
        await this.selectgroupMenuItem("Forms");
        await this.fromLayoutsMenuItem.click();
        await this.waitForNumberOfSeconds(2);
    }

    async datepickerPage() {
        await this.selectgroupMenuItem("Forms");
        await this.datePickerMenuItem.click();
    }

    async smartTablePage() {
        await this.selectgroupMenuItem("Tables & Data");
        await this.smartTableMenuItem.click();
    }

    async toastrPage() {
        await this.selectgroupMenuItem("Modal & Overlays");
        await this.toastrMenuItem.click();
    }

    async tooltipPage() {
        await this.selectgroupMenuItem("Modal & Overlays");
        await this.tooltipMenuItem.click();
    }

    async selectgroupMenuItem(groupItemTitle: string) {
        const menuItem = this.page.locator(`a[title="${groupItemTitle}"]`);
        const expandedState = await menuItem.getAttribute("aria-expanded");
        if (expandedState === "false") {
            await menuItem.click();
        }
    }
}


