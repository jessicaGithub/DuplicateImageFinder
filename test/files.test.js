const files = require("../lib/files")

test('JPG file extension should be allowed', () => {
    expect(files.validExtensionFilter("test.jpg")).toBe(true);
});

test('PNG file extension should be allowed', () => {
    expect(files.validExtensionFilter("test.png")).toBe(true);
});

test('JPEG file extension should be allowed', () => {
    expect(files.validExtensionFilter("test.jpeg")).toBe(true);
});

test('TIFF file extension should be allowed', () => {
    expect(files.validExtensionFilter("test.tiff")).toBe(true);
});

test('Text file extension should not be allowed', () => {
    expect(files.validExtensionFilter("test.txt")).toBe(false);
});

test('Word document file extension should not be allowed', () => {
    expect(files.validExtensionFilter("test.dox")).toBe(false);
});