import {render, screen} from "@testing-library/react";
import {Sales} from "./Sales";

const salesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
}

test('check if the number of uploads are been displaying', () => {
    render(<Sales uploads={salesOverview.uploads} added={salesOverview.linesAttempted}
                  lastUpdate={salesOverview.lastUploadDate}/>);
    const element = screen.getByText("8 uploads");
    expect(element).toBeInTheDocument();
});

test('check if the number of lines added are been displaying', () => {
    render(<Sales uploads={salesOverview.uploads} added={salesOverview.linesAttempted}
                  lastUpdate={salesOverview.lastUploadDate}/>);
    const element = screen.getByText((content, node) => {
        const hasText = (node) => node.textContent === "20 lines";
        const nodeHasText = hasText(node);
        // eslint-disable-next-line testing-library/no-node-access
        const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
    });
    expect(element).toBeInTheDocument();
});
