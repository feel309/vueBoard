package com.study.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.study.board.model.Board;

@Mapper
public interface BoardMapper {
  List<Board> findAll();
  Board findById(Long id);
  void insert(Board board);
  void update(Board board);
  void delete(Long id);
}