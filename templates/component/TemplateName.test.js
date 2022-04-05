import { render, screen } from '@testing-library/react';
import TemplateName from './TemplateName';

describe('TemplateName', () => {
  test('It should mount', async () => {
    render(<TemplateName />);
    const templateNameElement = await screen.findByTestId('TemplateName');
    expect(templateNameElement).toBeInTheDocument();
  });
})