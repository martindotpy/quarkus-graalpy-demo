package dev.martindotpy.sentimentanalysis.graalpy;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;
import org.graalvm.python.embedding.GraalPyResources;
import org.graalvm.python.embedding.VirtualFileSystem;

import dev.martindotpy.sentimentanalysis.configuration.GraalPyConfig;
import io.quarkus.runtime.Startup;
import jakarta.annotation.PreDestroy;
import jakarta.enterprise.context.ApplicationScoped;

/**
 * Manages the GraalVM Polyglot context for executing Python code.
 */
@Startup
@ApplicationScoped
public class GraalPyContext {
    static final String PYTHON = "python";

    private final Context context;

    public GraalPyContext(GraalPyConfig config) {
        var vfs = VirtualFileSystem.newBuilder()
                .resourceLoadingClass(getClass()) // Necessary for loading the vfs from resources; otherwise it won't
                                                  // find the files
                .resourceDirectory(config.vfsPath()).build();

        context = GraalPyResources.contextBuilder(vfs)
                .build();

        context.initialize(PYTHON);
    }

    /**
     * Evaluate Python source code.
     *
     * @param source Python source code as a String.
     * @return The result of the evaluation as a Value.
     */
    public Value eval(String source) {
        return context.eval(PYTHON, source);
    }

    @PreDestroy
    public void close() {
        context.close(true);
    }
}
