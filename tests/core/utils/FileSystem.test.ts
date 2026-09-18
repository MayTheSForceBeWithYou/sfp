import { expect } from '@jest/globals';
import FileSystem from '../../../src/core/utils/FileSystem';
const path = require('path');

describe('Given a search directory', () => {
    it('should return nested files', () => {
        const resourcesDir = path.join(__dirname, 'resources');
        let files = FileSystem.readdirRecursive(path.join(resourcesDir, 'a'), false, false);
        expect(files).toEqual(expectedFiles);

        files = FileSystem.readdirRecursive(path.join(resourcesDir, 'a'), true, false);
        expect(files).toEqual(expectedFilesIncludingDirs);

        files = FileSystem.readdirRecursive(path.join(resourcesDir, 'a'), false, true);
        expect(files).toEqual(expectedFiles.map((elem) => path.join(resourcesDir, 'a', elem)));

        files = FileSystem.readdirRecursive(path.join(resourcesDir, 'a'), true, true);
        expect(files).toEqual(expectedFilesIncludingDirs.map((elem) => path.join(resourcesDir, 'a', elem)));
    });
});

const expectedFiles = [
    path.join('b', 'b1.file'),
    path.join('b', 'c', 'c1.file'),
    path.join('b', 'c', 'c2.file'),
    path.join('b', 'd', 'd1.file'),
    path.join('b', 'd', 'x', 'x1.file'),
    path.join('b', 'e', 'e1.file'),
];
const expectedFilesIncludingDirs = [
    'b',
    path.join('b', 'b1.file'),
    path.join('b', 'c'),
    path.join('b', 'c', 'c1.file'),
    path.join('b', 'c', 'c2.file'),
    path.join('b', 'd'),
    path.join('b', 'd', 'd1.file'),
    path.join('b', 'd', 'x'),
    path.join('b', 'd', 'x', 'x1.file'),
    path.join('b', 'e'),
    path.join('b', 'e', 'e1.file'),
];
