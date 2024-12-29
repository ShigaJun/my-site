import React from 'react';
import articlesData from '../rss/data.json';
import { ArticleList } from './ArticleList';

export type Article = {
  title: string;
  url: string;
  date: string;
  thumbnail?: string;
  favicon: string;
  site: string;
};

export default function Articles() {
  const articles = articlesData as Article[];
  const articlesBySite = {
    note: articles.filter((article) => article.site === 'note'),
    qiita: articles.filter((article) => article.site === 'qiita'),
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid gap-4">
        <ArticleList title="note" articles={articlesBySite.note} />
        <ArticleList title="Qiita" articles={articlesBySite.qiita} />
      </div>
    </div>
  );
};