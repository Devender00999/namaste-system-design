const puppeteer = require("puppeteer");

(async () => {
   const browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      slowMo: 100,
      defaultViewport: null,
   });

   const page = await browser.newPage();
   await page.goto("https://google.com", { waitUntil: "networkidle2" });

   //  const coursesPageLink =
   //     "body > main > div:nth-child(2) > div > div.flex.flex-row.justify-between.block > div > div > div.ml-0.md\\:ml-12.flex.flex-col.md\\:flex-row.justify-end.md\\:justify-center.items-center.relative";

   //  await page.waitForSelector(coursesPageLink, { visible: true });

   //  await Promise.all([page.waitForNavigation({ waitUntil: "networkidle2" }), page.click(coursesPageLink)]);

   //  const firstCard =
   //     "body > main > div.sticky.top-0.z-50 > div.hidden.sm\\:flex.dark\\:bg-web-app-bg-dark.border-b.bg-white.border-brand-border-color.h-16 > div > div.ml-4.flex.items-center > button";

   //  await page.waitForSelector(firstCard, { visible: true });

   //  console.log("Here");

   //  await page.click(firstCard);

   //  await browser.close();
})();
