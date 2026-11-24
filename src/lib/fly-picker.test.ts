import assert from 'node:assert/strict';
import { test } from 'node:test';
import { pickDish } from './fly-picker.ts';

const watermelon = { name: 'watermelon', hz: 70.6 };
const tofu = { name: 'mapo tofu', hz: 0.7 };
const coffee = { name: 'black coffee', hz: 0 };

test('all three dishes select watermelon', () => {
  assert.deepEqual(pickDish([watermelon, tofu, coffee]), {
    verdict: 'The fly picked watermelon (70.6 Hz).',
    winner: 'watermelon',
  });
});

test('two dishes select the higher reading regardless of order', () => {
  assert.deepEqual(pickDish([coffee, tofu]), {
    verdict: 'The fly picked mapo tofu (0.7 Hz).',
    winner: 'mapo tofu',
  });
});

test('one dish prints a capitalized name, with no winner', () => {
  assert.deepEqual(pickDish([tofu]), {
    verdict: 'Mapo tofu elicited 0.7 Hz.',
    winner: null,
  });
});

test('an empty selection prompts for a dish', () => {
  assert.deepEqual(pickDish([]), { verdict: 'Choose at least one dish.', winner: null });
});

test('only exact ties for the highest reading tie', () => {
  const mango = { name: 'mango', hz: 70.6 };
  assert.deepEqual(pickDish([watermelon, coffee, mango]), {
    verdict: 'A tie: watermelon and mango (70.6 Hz).',
    winner: null,
  });
  assert.equal(pickDish([watermelon, { ...mango, hz: 70.59 }]).winner, 'watermelon');
});

test('whole-number readings keep one decimal', () => {
  assert.deepEqual(pickDish([coffee]), {
    verdict: 'Black coffee elicited 0.0 Hz.',
    winner: null,
  });
});
