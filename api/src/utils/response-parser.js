// api/src/utils/response-parser.js

export function extractJSON(text) {
  if (!text) {
    throw new Error('Empty response from Claude');
  }

  text = text.trim();

  // Find first {
  var firstBrace = text.indexOf('{');

  if (firstBrace === -1) {
    throw new Error('No JSON object found in response');
  }

  // Try to parse incrementally from first { until we get valid JSON
  var depth = 0;
  var inString = false;
  var escape = false;

  for (var i = firstBrace; i < text.length; i++) {
    var char = text[i];

    if (escape) {
      escape = false;
      continue;
    }

    if (char === '\\') {
      escape = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (inString) continue;

    if (char === '{') depth++;
    if (char === '}') depth--;

    if (depth === 0) {
      // Found complete JSON object
      var jsonStr = text.substring(firstBrace, i + 1);
      try {
        return JSON.parse(jsonStr);
      } catch (error) {
        throw new Error(`Failed to parse JSON: ${error.message}`);
      }
    }
  }

  throw new Error('Incomplete JSON object in response');
}
