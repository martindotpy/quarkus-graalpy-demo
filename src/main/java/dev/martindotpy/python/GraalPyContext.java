package dev.martindotpy.python;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;
import org.graalvm.python.embedding.GraalPyResources;
import org.graalvm.python.embedding.VirtualFileSystem;

import dev.martindotpy.configuration.GraalPyConfig;
import jakarta.annotation.PreDestroy;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class GraalPyContext {
    static final String PYTHON = "python";

    private final Context context;

    public GraalPyContext(GraalPyConfig graalPyConfig) {
        var vfs = VirtualFileSystem.newBuilder()
                .resourceDirectory(graalPyConfig.vfsPath().get().toString())
                .build();

        context = GraalPyResources.contextBuilder(vfs)
                .allowAllAccess(true)
                .build();

        context.initialize(PYTHON);
    }

    public Value eval(String source) {
        return context.eval(PYTHON, source);
    }

    @PreDestroy
    public void close() {
        context.close(true);
    }
}
