package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService service;


    @GetMapping("/posts")
    public List<Post> viewAll() {
        return service.viewAll();
    }

    @PostMapping("/posts")
    public Post create(@RequestBody Post newPost)
    {
        return service.create(newPost);
    }
}
