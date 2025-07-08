import { Locator, Page } from '@playwright/test';

interface RowData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  age: string;
}
export class SmartTablePage {
  readonly page: Page;
  readonly tableRows: Locator;

  constructor(page: Page) {
    this.page = page;

    // Chọn tất cả hàng trong bảng (tbody > tr)
    this.tableRows = page.locator('table tbody tr');
  }

  /**
   * Trả về số lượng dòng (tr) trong bảng
   */
  async getRowCount(): Promise<number> {
    return await this.tableRows.count();
  }

  /**
   * Lấy nội dung text từng dòng, trả về dưới dạng mảng string[]
   */
  async getRowTexts(): Promise<string[]> {
    // Đợi ít nhất 1 dòng hiển thị
    await this.tableRows.first().waitFor({ state: 'visible', timeout: 5000 });

    const rowCount = await this.getRowCount();
    const rows: string[] = [];

    for (let i = 0; i < rowCount; i++) {
      const rowText = await this.tableRows.nth(i).innerText();
      rows.push(rowText.trim());
    }

    return rows;
  }
  async getRowObjects(): Promise<RowData[]> {
    await this.tableRows.first().waitFor({ state: 'visible', timeout: 5000 });

    const rowCount = await this.tableRows.count();
    const rowObjects: RowData[] = [];

    for (let i = 0; i < rowCount; i++) {
      const row = this.tableRows.nth(i);
      const cells = row.locator('td');

      // Bỏ cột đầu tiên (icon edit/delete)
      const id = (await cells.nth(1).innerText()).trim();
      const firstName = (await cells.nth(2).innerText()).trim();
      const lastName = (await cells.nth(3).innerText()).trim();
      const username = (await cells.nth(4).innerText()).trim();
      const email = (await cells.nth(5).innerText()).trim();
      const age = (await cells.nth(6).innerText()).trim();

      rowObjects.push({ id, firstName, lastName, username, email, age });
    }

    return rowObjects;
  }
}
