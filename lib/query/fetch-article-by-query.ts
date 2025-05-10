import { prisma } from "../prisma";

export const fetchArticleByQuery = async (
  searchText: string,
  skip: number,
  take: number
) => {
  const [articles, total] = await prisma.$transaction([
    

    
  ]);

  
};
