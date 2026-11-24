type Dish = { name: string; hz: number };
type Pick = { verdict: string; winner: string | null };

export function pickDish(dishes: Dish[]): Pick {
  if (dishes.length === 0) return { verdict: 'Choose at least one dish.', winner: null };

  if (dishes.length === 1) {
    const [{ name, hz }] = dishes;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return { verdict: `${capitalized} elicited ${hz.toFixed(1)} Hz.`, winner: null };
  }

  const highest = Math.max(...dishes.map(({ hz }) => hz));
  const leaders = dishes.filter(({ hz }) => hz === highest).map(({ name }) => name);
  const reading = `${highest.toFixed(1)} Hz`;

  if (leaders.length > 1) {
    const names = leaders.map((name) => name.toLowerCase());
    const last = names.pop();
    return { verdict: `A tie: ${names.join(', ')} and ${last} (${reading}).`, winner: null };
  }

  const [winner] = leaders;
  return { verdict: `The fly picked ${winner.toLowerCase()} (${reading}).`, winner };
}
