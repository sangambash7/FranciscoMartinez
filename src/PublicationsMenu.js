import React from "react";
import { Link } from "react-router-dom";

export default function PublicationsMenu() {
  return (
    <div className="publications-menu">
      <Link to="/Publications">Monographs</Link>
      <Link to="/EditedVolumes">Edited volumes</Link>
      <Link to="/SpecialIssues">Special Issues</Link>
      <Link to="/SelectedArticles">Selected Articles</Link>
      <Link to="/SelectedChapters">Selected Chapters</Link>
      <Link to="/Novel">Novel</Link>
      <Link to="/español">En español</Link>
    </div>
  );
}
