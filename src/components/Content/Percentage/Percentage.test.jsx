import {calculatePercentage, Percentage} from "./Percentage";
import {render, screen} from "@testing-library/react";

const salesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
}


test('check the function to calculate percentage', () => {
    expect(calculatePercentage(15, 100)).toEqual("15.0");
});

test('check if both titles, upload success and lines saved are present', () => {
    render(<Percentage data={salesOverview}/>);
    const success = screen.getByText("UPLOAD SUCCESS");
    const lines = screen.getByText("LINES SAVED");
    expect(success).toBeInTheDocument();
    expect(lines).toBeInTheDocument();
});
