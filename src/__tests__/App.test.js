import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.tsx";
import { describe, expect, test } from "@jest/globals";

describe("App component", () => {
	test("increments and decrements the count", () => {
		render(<App />);

		// Initial count should be 0
		expect(screen.getByText(/0/)).toBeInTheDocument();

		// Find increment and decrement buttons
		const incrementButton = screen.getByText("+");
		const decrementButton = screen.getByText("-");

		// Simulate clicking the increment button
		fireEvent.click(incrementButton);
		expect(screen.getByText(/1/)).toBeInTheDocument();

		// Simulate clicking the decrement button
		fireEvent.click(decrementButton);
		expect(screen.getByText(/0/)).toBeInTheDocument();
	});
});
