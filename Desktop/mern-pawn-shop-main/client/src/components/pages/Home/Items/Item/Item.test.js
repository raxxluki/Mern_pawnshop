import {render, screen} from "@testing-library/react";
import Item from "./Item";

describe("Item properties", () => {
    const item = {
        name: "Item 001",
        description: "Item 001 description",
        price: 1.25
    }

    it("Should show item's name", async () => {
        render(<Item item={item}/>);
        const itemName = await screen.findByText(`Item ${item.name}`);
        expect(itemName).toBeInTheDocument();
    });

    it("Should show item's description", async () => {
        render(<Item item={item}/>);
        const itemDescription = await screen.findByText(`${item.description}`);
        expect(itemDescription).toBeInTheDocument();
    });

    it("Should show item's price", async () => {
        render(<Item item={item}/>);
        const itemPrice = await screen.findByText(`Price $${item.price}`);
        expect(itemPrice).toBeInTheDocument();
    });
});
