import { render, screen } from './utils/test-utils';
import App from './App';

test('renders app', async () => {
	render(<App />);
	const appElement = await screen.findByTestId('app-container');
	expect(appElement).toBeInTheDocument();
});
