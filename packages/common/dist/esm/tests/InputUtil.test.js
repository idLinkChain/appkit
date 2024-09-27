import { describe, test, expect, beforeEach, vi } from 'vitest';
import { InputUtil } from '../src/utils/InputUtil';
describe('InputUtil', () => {
    describe('numericInputKeyDown', () => {
        let mockEvent;
        let mockOnChange;
        beforeEach(() => {
            mockEvent = {
                key: '',
                preventDefault: vi.fn(),
                metaKey: false,
                ctrlKey: false
            };
            mockOnChange = vi.fn();
        });
        test('allows numeric keys', () => {
            const numericKey = '5';
            const mockEventWithNumericKey = { ...mockEvent, key: numericKey };
            InputUtil.numericInputKeyDown(mockEventWithNumericKey, '', mockOnChange);
            expect(mockEventWithNumericKey.preventDefault).not.toHaveBeenCalled();
        });
        test('allows dot when there is no existing dot', () => {
            const mockEventWithDot = { ...mockEvent, key: '.' };
            InputUtil.numericInputKeyDown(mockEventWithDot, '123', mockOnChange);
            expect(mockEventWithDot.preventDefault).not.toHaveBeenCalled();
        });
        test('prevents dot when there is an existing dot', () => {
            const mockEventWithDot = { ...mockEvent, key: '.' };
            InputUtil.numericInputKeyDown(mockEventWithDot, '123.45', mockOnChange);
            expect(mockEventWithDot.preventDefault).toHaveBeenCalled();
        });
        test('adds leading zero when dot is first character', () => {
            const mockEventWithDot = { ...mockEvent, key: '.' };
            InputUtil.numericInputKeyDown(mockEventWithDot, '', mockOnChange);
            expect(mockOnChange).toHaveBeenCalledWith('0.');
            expect(mockEventWithDot.preventDefault).toHaveBeenCalled();
        });
        test('replaces zero with new number', () => {
            const mockEventWithFive = { ...mockEvent, key: '5' };
            InputUtil.numericInputKeyDown(mockEventWithFive, '0', mockOnChange);
            expect(mockOnChange).toHaveBeenCalledWith('5');
            expect(mockEventWithFive.preventDefault).toHaveBeenCalled();
        });
        test('prevents non-numeric and non-allowed keys', () => {
            const mockEventWithE = { ...mockEvent, key: 'e' };
            InputUtil.numericInputKeyDown(mockEventWithE, '123', mockOnChange);
            expect(mockEventWithE.preventDefault).toHaveBeenCalled();
        });
        test('allows control keys', () => {
            const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
            controlKeys.forEach(key => {
                const mockEventWithControlKey = { ...mockEvent, key };
                InputUtil.numericInputKeyDown(mockEventWithControlKey, '123', mockOnChange);
                expect(mockEventWithControlKey.preventDefault).not.toHaveBeenCalled();
            });
        });
        test('prevents ctrl+a/c/v/x without control key', () => {
            const keys = ['a', 'c', 'v', 'x'];
            keys.forEach(key => {
                const mockEventWithKey = { ...mockEvent, key };
                InputUtil.numericInputKeyDown(mockEventWithKey, '123', mockOnChange);
                expect(mockEventWithKey.preventDefault).toHaveBeenCalled();
            });
        });
        test('allows ctrl+a/c/v/x with control key', () => {
            const keys = ['a', 'c', 'v', 'x'];
            keys.forEach(key => {
                const mockEventWithKeyAndCtrl = { ...mockEvent, key, ctrlKey: true };
                InputUtil.numericInputKeyDown(mockEventWithKeyAndCtrl, '123', mockOnChange);
                expect(mockEventWithKeyAndCtrl.preventDefault).not.toHaveBeenCalled();
            });
        });
    });
});
//# sourceMappingURL=InputUtil.test.js.map