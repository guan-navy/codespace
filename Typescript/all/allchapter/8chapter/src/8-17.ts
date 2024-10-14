interface Book{
    title: string;
    author: string;
    year: number;
    getSummary(): string;
}
//获取接口类当中的任意的属性,来达到需求
type SuBook = Pick<Book, 'title' | 'author'>;
