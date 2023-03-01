import MailService from "./MailService";

describe("MailService test file", () => {

    test("send test email from example", async () => {

        const sut = new MailService();
        sut.execute()
    })


})