export default {
    build: {
        lib: {
            entry: "src/header.js.js",
            name: "KSHeader",
            formats: ["umd"],
            fileName: () => "ksheader.js",
        },
        outDir: "Public",
        emptyOutDir: false
    }
};