import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FormErrorIcon, FormErrorMessage, Text } from "@chakra-ui/react";

interface CmsMetaData {
  cmsCategoryId: string;
  cmsType: string;
  cmsCategory: string;
  modified: string;
  slug: string;
  status: string;
  who: string;
  isFeatured: boolean;
  created: string;
  businesId: string;
}

interface CmsContent {
  title: string;
  shortText: string;
  body: string;
}

interface Content {
  cmsId: string;
  cmsMetaData: CmsMetaData;
  cmsContent: CmsContent;
  created: string;
  modified: string;
}

const ContentGrid = () => {
  const [content, setContent] = useState<Content[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Content[]>("/contents")
      .then((res) => setContent(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {content.map((cms) => (
          <li key={cms.cmsId}>{cms.cmsContent.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ContentGrid;
