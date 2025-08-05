package com.study.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.study.board.model.Board;
import com.study.board.service.BoardService;

@RestController
@RequestMapping("/api/boards")
public class BoardController {

    @Autowired private BoardService boardService;

    @GetMapping
    public List<Board> getAll() {
        return boardService.list();
    }

    @GetMapping("/{id}")
    public Board getById(@PathVariable(name="id") Long id) {
        return boardService.get(id);
    }

    @PostMapping
    public void create(@RequestBody Board board) {
        boardService.create(board);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable(name="id") Long id, @RequestBody Board board) {
        board.setId(id);
        boardService.update(board);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(name="id") Long id) {
        boardService.delete(id);
    }
}