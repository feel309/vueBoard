package com.study.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.board.mapper.BoardMapper;
import com.study.board.model.Board;

@Service
public class BoardService {
	
    @Autowired private BoardMapper boardMapper;

    public List<Board> list() { return boardMapper.findAll(); }
    public Board get(Long id) { return boardMapper.findById(id); }
    public void create(Board b) { boardMapper.insert(b); }
    public void update(Board b) { boardMapper.update(b); }
    public void delete(Long id) { boardMapper.delete(id); }
}