import { useEffect, useState } from 'react';

/**
 * TypewriterText — types out text letter by letter, line by line.
 * @param {string[]} lines  - array of lines to type
 * @param {number} speed    - ms per character
 * @param {number} lineDelay - ms pause between lines
 * @param {function} onDone - called when all lines are done
 */
export default function TypewriterText({
  lines = [],
  speed = 45,
  lineDelay = 600,
  onDone,
  className = '',
}) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setDone(false);
  }, [lines]);

  useEffect(() => {
    if (done) return;
    if (currentLine >= lines.length) {
      setDone(true);
      if (onDone) onDone();
      return;
    }

    const fullLine = lines[currentLine];

    if (currentChar < fullLine.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] || '') + fullLine[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay, done, onDone]);

  return (
    <div className={className}>
      {displayed.map((line, i) => (
        <p key={i} style={{ margin: '0 0 6px 0' }}>
          {line}
          {i === currentLine && !done && (
            <span className="letter-cursor" />
          )}
        </p>
      ))}
      {currentLine < lines.length && displayed.length <= currentLine && (
        <p style={{ margin: 0 }}>
          <span className="letter-cursor" />
        </p>
      )}
    </div>
  );
}
