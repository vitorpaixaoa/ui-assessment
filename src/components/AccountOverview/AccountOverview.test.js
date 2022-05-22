import {render, screen} from '@testing-library/react';
import AccountOverview from './AccountOverview';

const accountOverviewStub = {
    supportContact: {
        name: 'John Smith',
        email: 'john.smith@feefo.com'
    },
    salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079,
    }
}
test('renders learn react link', () => {
    render(<AccountOverview data={accountOverviewStub}/>);
    const element = screen.getByText(/Account Overview/i);
    expect(element).toBeInTheDocument();
});
